import { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Filter } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface LocalTask {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

type FilterType = 'all' | 'active' | 'completed';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<LocalTask[]>('tasks', []);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: LocalTask = {
        id: crypto.randomUUID(),
        title: newTaskTitle.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-400">Organize your tasks and boost productivity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Filter className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.active}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Circle className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.completed}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
            </div>
          </div>
        </Card>
      </div>

      <Card className="mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={addTask} disabled={!newTaskTitle.trim()}>
            <Plus size={20} />
          </Button>
        </div>
      </Card>

      <div className="mb-6 flex gap-2">
        <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>
          All ({stats.total})
        </Button>
        <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>
          Active ({stats.active})
        </Button>
        <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>
          Completed ({stats.completed})
        </Button>
      </div>

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {filter === 'all' ? 'No tasks yet. Add one to get started!' : `No ${filter} tasks.`}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} hover className="animate-slide-up">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="flex-shrink-0 transition-transform hover:scale-110"
                  aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {task.completed ? (
                    <CheckCircle className="text-green-600 dark:text-green-400" size={24} fill="currentColor" />
                  ) : (
                    <Circle className="text-gray-400 dark:text-gray-500" size={24} />
                  )}
                </button>

                <div className="flex-1">
                  <p
                    className={`text-lg ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-500'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {task.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(task.createdAt).toLocaleDateString()} at {new Date(task.createdAt).toLocaleTimeString()}
                  </p>
                </div>

                <Button variant="danger" onClick={() => deleteTask(task.id)} aria-label="Delete task">
                  <Trash2 size={18} />
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
