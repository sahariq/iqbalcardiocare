import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);

    let themeColorTag = document.querySelector('meta[name="theme-color"]');
    if (!themeColorTag) {
      themeColorTag = document.createElement("meta");
      themeColorTag.setAttribute("name", "theme-color");
      document.head.appendChild(themeColorTag);
    }
    themeColorTag.setAttribute("content", "#0ea5c6");
  }, [description, title]);

  return null;
}
