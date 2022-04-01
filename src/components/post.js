import * as React from "react";
import { Link } from "gatsby";

export default function Post({ title }) {
  return (
    <div>
      <title>{title ? title : Date.now()}</title>
      <div>content</div>
    </div>
  );
}
