import React from "react"
import "react-native"
import * as renderer from "react-test-renderer"

import FairsRail from "../FairsRail"

import { Theme } from "@artsy/palette"

const fairsModule = {
  results: [
    {
      id: "the-fair",
      name: "The Fair",
      mobileImage: { id: "image", url: "https://neopets.jpg" },
      profile: { href: "https://neopets.com" },
    },
    {
      id: "the-profileless-fair",
      name: "The Profileless Fair: You Should Not See Me in Snapshots",
      mobileImage: { id: "image", url: "https://neopets.jpg" },
      profile: null,
    },
  ],
}

it("looks correct when rendered", () => {
  const tree = renderer
    .create(
      <Theme>
        <FairsRail fairs_module={fairsModule as any} />
      </Theme>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
