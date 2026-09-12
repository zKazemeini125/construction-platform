"use client";

import { useState, FormEvent } from "react";
import { useDictionary } from "@/lib/i18n-client";
import NumericInput from "@/app/components/NumericInput";

type Priority = "low" | "medium" | "high" | "urgent";
type Category = "residential" | "commercial" | "industrial" | "infrastructure" | "renovation";

type ProjectFormValues = {
  name: string;
  category: Category | "";
  address: string;
  area: string;
  budget: string;
  priority: Priority;
  startDate: string;
  endDate: string;
  description: string;
};

const initialValues: ProjectFormValues = {
  name: "",
  category: "",
  address: "",
  area: "",
  budget: "",
  priority: "medium",
  startDate: "",
  endDate: "",
  description: "",
};

type FieldErrors = Partial<Record<keyof ProjectFormValues, string>>;

const inputClass =
  "w-full rounded-lg border border-(--muted-foreground)/30 bg-(--background) px-3 py-2.5 text-[14.5px] text-(--foreground) transition-colors placeholder:text-(--muted-foreground) focus:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)/20";

const labelClass = "mb-1.5 block text-[13.5px] font-medium text-(--foreground)";

export default function Home() {
  const { projectForm: t } = useDictionary();

  const [values, setValues] = useState<ProjectFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const setField = <K extends keyof ProjectFormValues>(key: K, value: ProjectFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = t.errorRequired;
    if (!values.category) next.category = t.errorRequired;
    if (!values.address.trim()) next.address = t.errorRequired;
    if (!values.area.trim()) next.area = t.errorRequired;
    if (!values.budget.trim()) next.budget = t.errorRequired;
    if (!values.startDate) next.startDate = t.errorRequired;
    if (values.endDate && values.startDate && values.endDate < values.startDate) {
      next.endDate = t.errorEndBeforeStart;
    }
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: اتصال به API واقعی ثبت پروژه
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("idle");
    }
  };

  const priorities: { value: Priority; label: string }[] = [
    { value: "low", label: t.priorityLow },
    { value: "medium", label: t.priorityMedium },
    { value: "high", label: t.priorityHigh },
    { value: "urgent", label: t.priorityUrgent },
  ];

  const categories: { value: Category; label: string }[] = [
    { value: "residential", label: t.categoryResidential },
    { value: "commercial", label: t.categoryCommercial },
    { value: "industrial", label: t.categoryIndustrial },
    { value: "infrastructure", label: t.categoryInfrastructure },
    { value: "renovation", label: t.categoryRenovation },
  ];

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl px-4 pb-16" noValidate>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-(--foreground)">{t.pageTitle}</h1>
        <p className="mt-1.5 text-[14.5px] text-(--muted-foreground)">{t.pageSubtitle}</p>
      </div>

      {status === "success" && (
        <div className="mb-6 rounded-lg border border-(--primary)/30 bg-(--primary)/10 px-4 py-3 text-[14px] text-(--primary)">
          {t.successMessage}
        </div>
      )}

      {/* اطلاعات پایه */}
      <section className="mb-8">
        <h2 className="mb-4 border-b border-(--muted-foreground)/20 pb-2 text-[15px] font-medium text-(--foreground)">
          {t.sectionBasics}
        </h2>

        <div className="mb-5">
          <label htmlFor="project-name" className={labelClass}>
            {t.name}
          </label>
          <input
            id="project-name"
            type="text"
            className={inputClass}
            placeholder={t.namePlaceholder}
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-[12.5px] text-red-500">{errors.name}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="project-category" className={labelClass}>
              {t.category}
            </label>
            <select
              id="project-category"
              className={inputClass}
              value={values.category}
              onChange={(e) => setField("category", e.target.value as Category)}
              aria-invalid={!!errors.category}
            >
              <option value="" disabled>
                {t.categoryPlaceholder}
              </option>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.category && <p className="mt-1 text-[12.5px] text-red-500">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="project-address" className={labelClass}>
              {t.address}
            </label>
            <input
              id="project-address"
              type="text"
              className={inputClass}
              placeholder={t.addressPlaceholder}
              value={values.address}
              onChange={(e) => setField("address", e.target.value)}
              aria-invalid={!!errors.address}
            />
            {errors.address && <p className="mt-1 text-[12.5px] text-red-500">{errors.address}</p>}
          </div>
        </div>
      </section>

      {/* دامنه و بودجه */}
      <section className="mb-8">
        <h2 className="mb-4 border-b border-(--muted-foreground)/20 pb-2 text-[15px] font-medium text-(--foreground)">
          {t.sectionScope}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="project-area" className={labelClass}>
              {t.area} <span className="text-(--muted-foreground)">({t.areaUnit})</span>
            </label>
            <NumericInput
              id="project-area"
              className={inputClass}
              value={values.area}
              onChange={(v) => setField("area", v)}
              aria-invalid={!!errors.area}
            />
            {errors.area && <p className="mt-1 text-[12.5px] text-red-500">{errors.area}</p>}
          </div>

          <div>
            <label htmlFor="project-budget" className={labelClass}>
              {t.budget} <span className="text-(--muted-foreground)">({t.budgetUnit})</span>
            </label>
            <NumericInput
              id="project-budget"
              className={inputClass}
              value={values.budget}
              onChange={(v) => setField("budget", v)}
              aria-invalid={!!errors.budget}
            />
            {errors.budget && <p className="mt-1 text-[12.5px] text-red-500">{errors.budget}</p>}
          </div>
        </div>

        <div className="mt-5">
          <span className={labelClass}>{t.priority}</span>
          <div className="flex flex-wrap gap-2">
            {priorities.map((p) => {
              const isSelected = values.priority === p.value;
              return (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setField("priority", p.value)}
                  className={`rounded-full px-4 py-1.5 text-[13.5px] transition-colors ${
                    isSelected
                      ? "bg-(--primary) text-(--primary-foreground)"
                      : "bg-(--muted) text-(--muted-foreground) hover:bg-(--muted)/70"
                  }`}
                  aria-pressed={isSelected}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* زمان‌بندی */}
      <section className="mb-8">
        <h2 className="mb-4 border-b border-(--muted-foreground)/20 pb-2 text-[15px] font-medium text-(--foreground)">
          {t.sectionSchedule}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="project-start" className={labelClass}>
              {t.startDate}
            </label>
            <input
              id="project-start"
              type="date"
              className={inputClass}
              value={values.startDate}
              onChange={(e) => setField("startDate", e.target.value)}
              aria-invalid={!!errors.startDate}
            />
            {errors.startDate && <p className="mt-1 text-[12.5px] text-red-500">{errors.startDate}</p>}
          </div>

          <div>
            <label htmlFor="project-end" className={labelClass}>
              {t.endDate}
            </label>
            <input
              id="project-end"
              type="date"
              className={inputClass}
              value={values.endDate}
              onChange={(e) => setField("endDate", e.target.value)}
              aria-invalid={!!errors.endDate}
            />
            {errors.endDate && <p className="mt-1 text-[12.5px] text-red-500">{errors.endDate}</p>}
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="project-description" className={labelClass}>
            {t.description}
          </label>
          <textarea
            id="project-description"
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder={t.descriptionPlaceholder}
            value={values.description}
            onChange={(e) => setField("description", e.target.value)}
          />
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-(--primary) px-6 py-2.5 text-[14.5px] font-medium text-(--primary-foreground) transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? t.submitting : t.submit}
        </button>
        <button
          type="button"
          onClick={() => setValues(initialValues)}
          className="rounded-full bg-(--muted) px-6 py-2.5 text-[14.5px] text-(--muted-foreground) transition-colors hover:bg-(--muted)/70"
        >
          {t.cancel}
        </button>
      </div>
    </form>
  );
}
