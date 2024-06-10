"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

import { Check } from 'lucide-react';

export function Chip({ text, isTask }: { text: string, isTask?: boolean }) {
  const [isChecked, setIsChecked] = useState(false)
  const [params, setParams] = useState<string[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleParams = () => {
    setIsChecked(!isChecked)
    const params = new URLSearchParams(searchParams)

    const urlParam = isTask ? 't' : 'f'
    const existingParams = params.getAll(urlParam);

    if (isChecked && existingParams.includes(text)) {
      const newParams = existingParams.filter(param => param !== text);
      params.delete(urlParam);
      newParams.forEach(param => params.append(urlParam, param));
    }

    if (!isChecked && !existingParams.includes(text)) {
      params.append(urlParam, text);
    }

    router.push(`/dashboard/topicos?${params}`)
  }



  return (
    <div
      onClick={handleParams}
      className={`relative text-xs flex items-center justify-center gap-1 px-5 py-2 rounded-full cursor-pointer transition-colors duration-200 ${isChecked ? 'bg-primary/70' : 'bg-transparent border-dashed border border-primary/60'}`}>
      <span className="select-none">{text}</span>
      {isChecked ? (
        <Check strokeWidth={2} size={14} className="dark:text-white check" />
      ) : (
        <Check strokeWidth={2} size={14} className="dark:text-white uncheck" />
      )}
    </div>
  )
}