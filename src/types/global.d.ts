// src/env.d.ts  (or src/types/global.d.ts if you prefer a dedicated file)
/// <reference types="astro/client" />

import type Alpine from "alpinejs";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}