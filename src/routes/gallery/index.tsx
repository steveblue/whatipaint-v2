import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './gallery.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div>
        Gallery
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Gallery',
};
