import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from './index.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="host">
      <div class="artwork">
        <img src="/assets/images/IMG_7832_1.JPG" />
      </div>
      <div class="cta">
        <h1>Single Edition Fine Art Prints</h1>
        <h4>2023 Collection</h4>
        <h4>Susanne Knight Connally</h4>
        <Link class="route__link" href="/gallery/">View the gallery</Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
