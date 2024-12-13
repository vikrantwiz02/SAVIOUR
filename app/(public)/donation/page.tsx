'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import  Label  from '@/components/ui/label'

export default function Donation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    currency: 'INR',
    message: '',
    paymentMethod: 'card',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the donation data to your backend
    console.log('Donation submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', amount: '', currency: 'INR', message: '', paymentMethod: 'card' })
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            Make a Donation
          </h1>
          <p className="mt-4 text-lg text-indigo-600">
            Your generosity helps us make a difference. Thank you for your support.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-indigo-900">Donation Details</CardTitle>
              <CardDescription className="text-indigo-600">Fill out the form below to make your donation.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Donation Amount</Label>
                  <div className="flex space-x-2">
                    <Input
                      type="number"
                      name="amount"
                      id="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      min="1"
                      step="0.01"
                      className="flex-grow"
                    />
                    <select
                      value={formData.currency}
                      onChange={(e) => handleSelectChange('currency', e.target.value)}
                      className="w-[100px] rounded-md border border-indigo-300 bg-white px-3 py-2 text-sm text-indigo-600 ring-offset-background focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor=" payment-method">Payment Method</Label>
                  <div className="flex flex-col space-y-1">
                    {['card', 'netbanking', 'upi'].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={(e) => handleSelectChange('paymentMethod', e.target.value)}
                          className="rounded-full border-indigo-300 text-indigo-600 focus:ring-indigo-400"
                        />
                        <span>{method === 'card' ? 'Credit/Debit Card' : method === 'netbanking' ? 'Net Banking' : 'UPI'}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleSubmit}>
                Make Donation
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}