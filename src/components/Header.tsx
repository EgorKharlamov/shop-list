import { Link } from '@solidjs/router';
import { For } from 'solid-js';
import { Router } from '@/router';

export const Header = () => {
  const navbar = [
    {
      href: '/',
      title: 'home',
    },
    {
      href: '/todos',
      title: 'todo list',
    },
  ];
  const router = Router;
  console.log(router);
  return (
    <>
      <header class='py-[20px] px-10 flex justify-between bg-blue-400 text-amber-100'>
        <div class='logo'>
          <Link href='/'>{'logo'.toUpperCase()}</Link>
        </div>
        <nav>
          <For each={navbar}>
            {(item) => (
              <Link
                href={item.href}
                class='p-2'
              >
                {item.title.toUpperCase()}
              </Link>
            )}
          </For>
        </nav>
      </header>
    </>
  );
};
