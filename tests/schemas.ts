import { z } from "zod";

const nameSchema = z
  .string()
  .min(1, "Name must not be empty")
  .max(80, "Name must not exceed 80 characters")
  .regex(/^[^\s].*[^\s]$|^[^\s]$/, "Name must not start or end with whitespace")
  .regex(
    /^[a-zA-Z0-9\s\-.()'&_+\u00C0-\u017F]+$/,
    "Name can only contain letters (including accented), numbers, spaces, hyphens, underscores, periods, parentheses, apostrophes, ampersands, and plus signs",
  );

const platformIdSchema = z
  .string()
  .min(1, "Platform ID must not be empty")
  .max(60, "Platform ID must not exceed 60 characters")
  .regex(
    /^[a-z0-9][a-z0-9-]*$/,
    "ID must be in kebab-case: lowercase letters, numbers, and hyphens only. Cannot start with a hyphen.",
  );

const idSchema = z
  .string()
  .min(1, "ID must not be empty")
  .max(60, "ID must not exceed 60 characters")
  .regex(
    /^[a-zA-Z0-9][a-zA-Z0-9-]*$/,
    "ID must be in kebab-case format: letters (including uppercase), numbers, and hyphens only. Cannot start with a hyphen.",
  );

export const ContractSchema = z.object({
  id: idSchema,
  name: nameSchema,
  address: z.string(),
  serviceId: z.string(),
  platformId: platformIdSchema,
  networkId: z.string(),
});

export const ServiceSchema = z.object({
  id: idSchema,
  name: nameSchema,
  platformId: platformIdSchema,
  networkId: z.string(),
  contracts: z.array(ContractSchema),
  link: z.string().url().optional(),
  description: z.string().optional(),
});

export const PlatformSchema = z.object({
  id: platformIdSchema,
  name: nameSchema,
  image: z.string().url(),
  tags: z.array(z.string()).min(1),
  links: z.object({
    website: z.string().url(),
    discord: z.string().url().optional(),
    telegram: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    medium: z.string().url().optional(),
    documentation: z.string().url().optional(),
  }),
});
