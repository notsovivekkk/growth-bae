// Same curve as --aeo-ease. Fast out, long soft landing.
export const EASE = [0.22, 1, 0.36, 1] as const
// Trim the viewport vertically only. A single "-12%" also trims the sides,
// so small left-aligned items (section marks) never "enter" on phones.
export const VIEWPORT = { once: true, margin: "-12% 0px" } as const
