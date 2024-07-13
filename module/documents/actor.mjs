/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class DontLeaveThePathActor extends Actor {

    /** @override */
    prepareData() {
        // Prepare data for the actor. Calling the super version of this executes
        // the following, in order: data reset (to clear active effects),
        // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
        // prepareDerivedData().
        super.prepareData();
    }

    /** @override */
    prepareBaseData() {
        // Data modifications in this step occur before processing embedded
        // documents or derived data.
    }

    /**
     * @override
     * Augment the basic actor data with additional dynamic data. Typically,
     * you'll want to handle most of your calculated/derived data in this step.
     * Data calculated in this step should generally not exist in template.json
     * (such as ability modifiers rather than ability scores) and should be
     * available both inside and outside of character sheets (such as if an actor
     * is queried and has a roll executed directly from it).
     */ 
    prepareDerivedData() {
        const actorData = this;
        const systemData = actorData.system;

        this._prepareCharacterData(actorData);
        this._prepareCreatureData(actorData);
        this._prepareBossData(actorData);
    }


    /**
     * Prepare Character data
     */
    _prepareCharacterData() {
        if (actorData.type !== "character") return;

        // Make modifications to data here. For example:
        const systemData = actorData.system;
    }

    /**
     * Prepare Creature data
     */
    _prepareCreatureData() {
        if (actorData.type !== "creature") return;

        // Make modifications to data here. For example:
        const systemData = actorData.system;
    }

    /**
     * Prepare Bass data
     */
    _prepareBossData() {
        if (actorData.type !== "boss") return;

        // Make modifications to data here. For example:
        const systemData = actorData.system;
    }
}