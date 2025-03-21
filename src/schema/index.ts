import { z } from "zod";

export const AccountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["CURRENT", "SAVINGS"]),
  balance: z.string().min(1, "Balance must be a positive number"),
  isDefault: z.boolean().default(false),
});

export const TransactionSchema = z
  .object({
    type: z.enum(["INCOME", "EXPENSE"]),
    amount: z.string().min(1, "Amount is required"),
    description: z.string().optional(),
    date: z.date({ required_error: "Date must be a valid date" }),
    accountId: z.string().min(1, "AccountId is required"),
    category: z.string().min(1, "Category is required").default("Rent"),
    isRecurring: z.boolean().default(false),
    recurringInterval: z
      .enum(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"])
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isRecurring && !data.recurringInterval) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Recurring interval is required when recurring is enabled",
        path: ["recurringInterval"],
      });
    }
  });
