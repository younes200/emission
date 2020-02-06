import { Theme } from "@artsy/palette"
import React from "react"

import "react-native"
import * as renderer from "react-test-renderer"

import { FilterModal } from "lib/Components/FilterModal"

it("looks like expected", () => {
  let props

  props = {
    visible: true,
  }

  const tree = renderer
    .create(
      <Theme>
        <FilterModal {...props} />
      </Theme>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
