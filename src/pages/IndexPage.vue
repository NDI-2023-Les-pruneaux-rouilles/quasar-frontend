<template>
  <q-page class="row items-center justify-evenly">
    <div class="flex column justify-center items-center link-cross">
      <div class="link-tile" id="link-tile-1" @click="$router.push({ path: '/learn' })">
        <div class="text-h4">LEARN</div>
        <div class="text-caption">Ask the AI</div>
      </div>
      <div class="flex row justify-center items-center">
        <div class="link-tile" id="link-tile-2" @click="$router.push({ path: '/swipe' })">
          <div class="text-h4">SWIPE</div>
          <div class="text-caption">Test your knowledge</div>
        </div>
        <div id="link-tile-0" ></div>
        <div class="link-tile" id="link-tile-3" @click="$router.push({ path: '/tools' })">
          <div class="text-h4">TOOLS</div>
          <div class="text-caption">Lower your impact</div>
        </div>
      </div>
      <div class="link-tile" id="link-tile-4" @click="$router.push({ path: '/get-involved' })">
        <div class="text-h4 text-center">GET INVOLVED</div>
        <div class="text-caption">Join the future</div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'Prune Concept',
  titleTemplate: (title: string) => `${title}`,
}

export default defineComponent({
  name: 'IndexPage',
  setup() {
    useMeta(metaData)
  }
});
</script>

<style lang="scss">

$tile_width: 225px;
$tile_height: 225px;
$tile_border_radius: 50px;
$tile_inner_color: rgba(150, 150, 150, 0.25);
$tile_outer_color: rgba(150, 150, 150, 0.75);
$shadow_tile_color: transparentize($green, 0.9);

#link-tile-0 {
  width: $tile_width;
  height: $tile_height;

  background: $tile_inner_color;
}

#link-tile-1 {
  background: linear-gradient(0deg, $tile_inner_color, $tile_outer_color);

  border-top-left-radius: $tile_border_radius;
  border-top-right-radius: $tile_border_radius;
}

#link-tile-1:hover {
  box-shadow: $shadow_tile_color 0 -15px 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

#link-tile-2 {
  background: linear-gradient(-90deg, $tile_inner_color, $tile_outer_color);

  border-top-left-radius: $tile_border_radius;
  border-bottom-left-radius: $tile_border_radius;
}

#link-tile-2:hover {
  box-shadow: $shadow_tile_color -15px 0 15px;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

#link-tile-3 {
  background: linear-gradient(90deg, $tile_inner_color, $tile_outer_color);

  border-top-right-radius: $tile_border_radius;
  border-bottom-right-radius: $tile_border_radius;
}

#link-tile-3:hover {
  box-shadow: $shadow_tile_color 15px 0 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

#link-tile-4 {
  background: linear-gradient(180deg, $tile_inner_color, $tile_outer_color);

  border-bottom-left-radius: $tile_border_radius;
  border-bottom-right-radius: $tile_border_radius;
}

#link-tile-4:hover {
  box-shadow: $shadow_tile_color 0 15px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.link-tile:hover {
  background: radial-gradient(rgba(50, 50, 50, 1), rgba(150, 150, 150, 0.25))!important;
}

.link-tile {
  width: $tile_width;
  height: $tile_height;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

</style>
