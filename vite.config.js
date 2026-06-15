import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'replace-placeholders',
      transformIndexHtml(html) {
        // In dev mode, replace placeholders with dev values
        if (process.env.NODE_ENV !== 'production') {
          return html
            .replace(/__SHOW_CHANGELOG__/g, 'false')
            .replace(/__CHANGELOG_HTML__/g, '"This will be replaced with a Python template variable in the dist folder. <ul><li>This is a test</li><li>This is a test</li><li>This is a test</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit, nisi quis posuere iaculis, nisl nulla elementum dui, ut maximus purus nulla vitae odio. Quisque id faucibus dolor. Proin fringilla fringilla sodales. Fusce feugiat et est non tincidunt. Phasellus cursus mi a libero luctus, vel accumsan mauris ultricies. Quisque et magna pretium, laoreet nulla vel, condimentum tellus. Ut gravida metus arcu, id convallis velit rutrum in. Phasellus in leo neque. Aliquam vitae ipsum iaculis, iaculis tortor vitae, volutpat erat. Etiam in ante massa.</p><p>Curabitur venenatis, turpis vitae aliquam ullamcorper, ante tortor sollicitudin risus, at cursus purus leo vel lacus. Donec eu ipsum congue, luctus dui ut, elementum lacus. Aliquam lacinia ipsum est, at dapibus sem blandit tristique. Ut luctus efficitur turpis eget dapibus. Aliquam erat volutpat. Fusce pharetra, nisi vitae euismod posuere, ex risus hendrerit magna, in pellentesque odio enim sit amet tellus. Praesent quis nunc eu quam fringilla posuere. Nulla fringilla ipsum non massa aliquet mattis. Nulla vitae iaculis tortor, at vulputate diam.</p><p>Curabitur nisi nulla, vestibulum a ligula et, efficitur iaculis lorem. Cras faucibus felis ante, a aliquet lorem congue ut. Quisque faucibus at est hendrerit eleifend. Vestibulum lacinia magna in est fermentum, et eleifend ipsum placerat. Mauris fermentum, diam ut consequat varius, odio nibh aliquet ligula, a sagittis lorem nisi eu eros. Nam congue aliquam eleifend. Cras dui quam, egestas nec urna sit amet, sodales viverra est. Sed cursus tellus vitae nulla convallis gravida. Quisque lacinia turpis non rutrum consectetur. Aliquam tincidunt eu lacus eu rhoncus. In tincidunt felis nec convallis facilisis.</p><p>Nunc id eleifend nulla, quis vestibulum erat. Phasellus auctor enim in condimentum sagittis. Phasellus euismod tincidunt dolor, vel malesuada odio dignissim in. Etiam ultricies ante in interdum posuere. Duis fringilla ornare sapien quis mattis. Proin vitae nibh est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel convallis tellus. Etiam vehicula augue nec dignissim luctus. Nulla hendrerit, augue ullamcorper egestas lobortis, justo enim viverra sem, quis dapibus metus nibh sed metus. Curabitur mattis convallis orci, eget facilisis sapien varius id. Vestibulum malesuada orci sed luctus tincidunt. Vivamus vitae turpis at nisi consectetur scelerisque quis a felis. Vivamus malesuada sapien nec leo fringilla, a malesuada nisi porta. Suspendisse leo dui, gravida nec dapibus sit amet, posuere nec lectus.</p><p>Phasellus vel hendrerit neque, et iaculis tortor. Donec pretium lobortis pretium. Mauris egestas nec nunc in varius. Proin molestie at turpis nec gravida. Quisque placerat diam dolor, vitae sodales ante volutpat sed. Sed a mattis arcu, et dapibus enim. Vivamus semper feugiat lectus sit amet tempus. Aliquam erat volutpat. Curabitur at accumsan orci, sed eleifend lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>"');
        }
        return html;
      }
    }
  ],
  build: {
    cssMinify: false,
    rolldownOptions: {
      output: {
        dir: './dist',
        entryFileNames: 'appeal.js',
        assetFileNames: 'appeal.css',
      },
    },
  },
})
