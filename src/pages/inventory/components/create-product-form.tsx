import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import { v4 as uuidv4 } from "uuid"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { generateProductNumber } from "@/lib/utils";
import { useEffect } from "react";

const productSchema = z.object({
  productName: z.string().min(1, 'Product name is required'),
  cost: z.number().min(0, 'Cost must be a positive number'),
  profit: z.number().min(0, 'Profit must be a positive number'),
  revenue: z.number().min(0, 'Revenue must be a positive number'),
  customerEmail: z.string().email('Invalid email address'),
  merchantName: z.string().min(1, 'Merchant name is required'),
  receiptStatus: z.enum(['received', 'not_received']),
  paymentStatus: z.enum(['paid', 'not_paid']),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function CreateProductForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: '',
      cost: 0,
      profit: 0,
      revenue: 0,
      customerEmail: '',
      merchantName: '',
      receiptStatus: 'not_received',
      paymentStatus: 'not_paid',
    }
  });

  // Watch cost and profit values
  const cost = useWatch({
    control: form.control,
    name: 'cost'
  });
  const profit = useWatch({
    control: form.control,
    name: 'profit'
  });

  // Update revenue when cost or profit changes
  useEffect(() => {
    const revenue = (cost || 0) + (profit || 0);
    form.setValue('revenue', revenue, { shouldValidate: true });
  }, [cost, profit, form]);

  const onSubmit = (data: ProductFormValues) => {
    const newProduct = {
      ...data,
      id: uuidv4(),
      productNumber: generateProductNumber(),
      orderTime: new Date().toISOString(),
    }
    console.log(newProduct);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex justify-center gap-4 w-full">
          <div className="space-y-6 flex-1">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      {...field} 
                      onChange={e => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profit</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      {...field}
                      onChange={e => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="revenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Revenue</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      {...field}
                      disabled
                      className="bg-zinc-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-6 flex-1">
            <FormField
              control={form.control}
              name="customerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="merchantName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Merchant Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="receiptStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receipt Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select receipt status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="received">Received</SelectItem>
                      <SelectItem value="not_received">Not Received</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="not_paid">Not Paid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">Create Product</Button>
      </form>
    </Form>
  )
}
