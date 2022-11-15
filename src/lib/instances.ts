import { faker } from "@faker-js/faker";

export interface Instance {
    name: string
    version: {
        modpackVersion: string
        minecraftVersion: string
    }
    group: string
    icon: string
    lastPlayed: Date
}

function randomInstance(): Instance {
    return {
        name: faker.random.word(),
        version: {
            modpackVersion: faker.system.semver(),
            minecraftVersion: faker.system.semver(),
        },
        group: faker.helpers.arrayElement(["Other", "group1", "group2", "Favorites"]),
        icon: faker.image.imageUrl(),
        lastPlayed: faker.date.past(),
    }
}

export const instances = Array(21).fill(0).map(randomInstance)