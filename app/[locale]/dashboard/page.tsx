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
      >
        <Welcome message="سلام زهرا خوش آمدید!" />
        <div className="flex flex-row gap-3 justify-around py-3">
          <Card title="پروژه‌ها" count="12" background="/cardBackground/project-dark.png"></Card>
          <Card title="سفارشات" count="9" background="/cardBackground/shop-dark.png"></Card>
          <Card title="پرداختی ها" count="35" background="/cardBackground/wallet-dark.png"></Card>
          <Card title="پروژه‌ها" count="12" background="/cardBackground/time-dark.png"></Card>
        </div>
      </PageContainer>
    </>
  );
}
