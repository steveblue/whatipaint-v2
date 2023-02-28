import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './frame.scss?inline';

/**
 * Application frame around most views.
 */
export const Frame = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="host">
        <Slot />
    </div>
  );
});
