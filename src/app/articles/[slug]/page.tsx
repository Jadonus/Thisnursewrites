"use client";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
let sh = require("showdown");
import { useState } from "react";
export default function Article() {
  let [html, setHtml] = useState("");
  let [er, setEr] = useState(false);
  let converter = new sh.Converter();
  console.log(window.location.pathname.split("/").pop());
  fetch(
    window.location.origin +
      "/" +
      window.location.pathname.split("/").pop() +
      ".md" || "404"
  )
    .then((response) => {
      if (!response.ok) {
        location.href = "http://localhost:3000/404";
      }
      return response.text();
    })
    .then((d) => {
      setHtml(converter.makeHtml(d));
      console.log(html);
    })
    .catch((e) => {
      console.log(e);
      setEr(true);
    });
  if (er === true) {
    location.href = "localhost:3000/404";
  } else {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: html }} className="prose" />
      </>
    );
  }
}
