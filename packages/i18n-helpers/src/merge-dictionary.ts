// دیکشنری مشترک UI (از packages/ui) با دیکشنری اختصاصی هر Zone مرج می‌شه
export function mergeDictionary
  T extends Record<string, unknown>,
  U extends Record<string, unknown>
>(shared: T, local: U): T & U {
  return { ...shared, ...local } as T & U;
}