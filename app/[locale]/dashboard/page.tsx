"use client";
import Card from "@/app/components/card";
import PageContainer from "@/app/components/pageContainer";
import Welcome from "@/app/components/welcome";
import { useDictionary } from "@/lib/i18n-client";

export default function Home() {
  const { sidebar } = useDictionary();

  return (
    <>
      <PageContainer
        breadcrumbItems={[{ label: sidebar.dashboard, href: "/dashboard" }]}
      />
      <Welcome message="سلام زهرا خوش آمدید!" />
      <div className="flex flex-row gap-3 justify-around">
        <Card title="پروژه‌ها" count="12"></Card>
        <Card title="سفارشات" count="9"></Card>
        <Card title="پرداختی ها" count="35"></Card>
        <Card title="پروژه‌ها" count="12"></Card>
      </div>
    </>
  );
}
