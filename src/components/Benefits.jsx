import { FaUsers, FaNetworkWired, FaTools, FaHandsHelping } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    title: 'Real Team Work',
    description: 'Collaborate cross-discipline with your team, and work directly with real customers. Leverage each others skills, just like your usual product team',
    icon: <FaUsers className="h-10 w-10 text-gray-600" />,
  },
  {
    id: 2,
    title: 'Build Connections',
    description: 'Gather professional references and meet like-minded folks from various backgrounds. Network with industry leaders and professionals.',
    icon: <FaNetworkWired className="h-10 w-10 text-gray-600" />,
  },
  {
    id: 3,
    title: 'Real Projects',
    description: 'No more bolierplate projects or case studies. Put your theoretical knowledge to the test and ship a product of your own with real impact.',
    icon: <FaTools className="h-10 w-10 text-gray-600" />,
  },
  {
    id: 4,
    title: 'Support & Accountability',
    description: 'Our dedicated projects and discipline mentors will make sure youre on track. Along with check-ins, workshops, office hours and more.',
    icon: <FaHandsHelping className="h-10 w-10 text-gray-600" />,
  },
  // More posts...
]

function Benefits() {
  return (
    <div className="bg-white py-18 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative mt-8 flex items-center gap-x-4">
                {post.icon}
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits;
