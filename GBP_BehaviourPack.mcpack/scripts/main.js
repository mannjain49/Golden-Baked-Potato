import { system } from "@minecraft/server";

system.beforeEvents.startup.subscribe((event) => {
  event.itemComponentRegistry.registerCustomComponent("gbp:apply_regeneration_on_consume", {
    onConsume(consumeEvent) {
      const consumer = consumeEvent.source;

      if (consumer?.typeId !== "minecraft:player") {
        return;
      }

      consumer.addEffect("minecraft:regeneration", 18, {
        amplifier: 4,
        showParticles: true
      });
    }
  });
});
