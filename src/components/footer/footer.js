import { navigate } from 'gatsby'
import React from 'react'
import Cta from '../cta/cta'

import * as classes from "./footer.module.scss"

function Footer() {
    return (
        <footer>
        <Cta handleClick={() => navigate("/contact")} desc="Contact Us"/>
      <div className={classes.contact}>
          <div>
            <h3>Reginald Soriano</h3>
            <p>
            Managing Director Electrical<br/>
            0430 454 466<br />
            </p>
          </div>
          <div>
            <h3>Paul Hill</h3>
            <p>
              Managing Director Electronics<br />
              0400 028 582<br />
              </p>
          </div>

        </div>
        <span>
          EC:14801
        </span>
        <span className={classes.copyright}>
          © {new Date().getFullYear()} Archipelago Marine. All rights reserved.
        </span>
        </footer>
    )
}

export default Footer
