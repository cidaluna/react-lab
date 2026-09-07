"use server";

export const fetcher = async (url: string) => fetch(url).then((r) => r.json());
