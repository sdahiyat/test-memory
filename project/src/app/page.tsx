import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            MindfulJournal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your thoughts, log your mood, and discover insights about your mental wellness journey with AI-powered reflections.
          </p>
          <div className="space-x-4">
            <Link 
              href="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Journaling
            </Link>
            <Link 
              href="/mood"
              className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Log Your Mood
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Journaling</h3>
            <p className="text-gray-600">Capture your thoughts and experiences with our intuitive journal interface.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mood Tracking</h3>
            <p className="text-gray-600">Log your daily mood and visualize patterns over time.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Insights</h3>
            <p className="text-gray-600">Get personalized reflections and insights powered by artificial intelligence.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
