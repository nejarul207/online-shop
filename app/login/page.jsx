import { Suspense } from 'react';
// ধাব ১ এ তৈরি করা ক্লায়েন্ট কম্পোনেন্টটি ইম্পোর্ট করুন
import LoginClient from './LoginClient'; 

export default function LoginPage() {
  return (
    // <Suspense> দ্বারা মুড়ে দিন
    // এটি নিশ্চিত করবে যে useSearchParams() কল করার সময় বিল্ড ভাঙবে না।
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="text-xl text-gray-600">Loading Login Interface...</div>
      </div>
    }>
      <LoginClient />
    </Suspense>
  );
}