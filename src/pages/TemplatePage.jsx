import React from 'react'
import TemplateShowcase from './TemplateShowcase'

function TemplatePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFEAC5] via-white to-[#FFDBB5]">
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Design Templates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of high-quality design templates for your next project. All templates are fully
            responsive and built with modern technologies.
          </p>
        </div>
        <TemplateShowcase />
      </main>
    </div>
  )
}

export default TemplatePage
