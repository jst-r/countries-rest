import { writable, derived } from "svelte/store";
import type { Country, CountryName } from "./model";

export const countries = writable<Record<CountryName, Country>>({});
