"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  return <p>Have a great day! {t("title")}</p>;
}
