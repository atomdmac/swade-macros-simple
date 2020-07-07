function i18n(key) {
    return game.i18n.localize(key);
}

Hooks.once("init", () => {

    game.settings.register("swade-macro-simple", "skillShooting", {
		name: i18n("swadeMacro.settings.skillShooting.name"),
		hint: i18n("swadeMacro.settings.skillShooting.hint"),
		scope: "world",
		config: true,
		default: "Shooting",
		type: String
    });
    
    game.settings.register("swade-macro-simple", "skillFighting", {
		name: i18n("swadeMacro.settings.skillFighting.name"),
		hint: i18n("swadeMacro.settings.skillFighting.hint"),
		scope: "world",
		config: true,
		default: "Fighting",
		type: String
    });
    
    game.settings.register("swade-macro-simple", "trackAmmoConsumption", {
		name: i18n("swadeMacro.settings.trackAmmo.name"),
		hint: i18n("swadeMacro.settings.trackAmmo.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
    
    game.settings.register("swade-macro-simple", "grittyDamage", {
		name: i18n("swadeMacro.settings.grittyDamage.name"),
		hint: i18n("swadeMacro.settings.grittyDamage.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

});
