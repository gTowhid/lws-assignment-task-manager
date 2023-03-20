import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TaskList from '../components/TaskList';

export default function Homepage() {
  return (
    <div>
      <Sidebar />

      <div className="container relative">
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            {/* Add New Task Button */}
            <div className="justify-between mb-10 space-y-2 md:flex md:space-y-0">
              <Link to="/addTask" className="lws-addnew group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-indigo-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <span className="group-hover:text-indigo-500">Add New</span>
              </Link>
            </div>
            <TaskList />
          </main>
        </div>
      </div>
    </div>
  );
}
