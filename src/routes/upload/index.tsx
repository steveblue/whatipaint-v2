import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead, action$, Form } from '@builder.io/qwik-city';
import sharp from 'sharp';
import { Frame } from '~/components/frame/frame';
import styles from './upload.scss?inline';

export const useSubmit = action$(async(form: any) => {
    const arrayBuffer = await form.upload.arrayBuffer();
    const buffer = await Buffer.from(arrayBuffer, 'base64');
    const filename = 'output.webp';
    await sharp(buffer)
        .toFile(`./assets/${filename}`, (err: any, info: any) => {
            console.log(err);
            console.log(info);
        })
    return {
      success: true
    }
});

export default component$(() => {
  useStylesScoped$(styles);
  const action = useSubmit();
  return (
    <Frame>
      <h1>
        Upload Image
      </h1>
      <Form action={action} >
        <input type="file" name="upload" />
        <button type="submit">Upload</button>
      </Form>
    </Frame>
  );
});

export const head: DocumentHead = {
  title: 'Upload',
};
