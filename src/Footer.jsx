import React from 'react'

function Footer() {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        <div class="col-12 col-md" style={{padding:'30px 30px'}}>
            <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
        <div class="col-6 col-md" style={{padding:'30px 30px'}}>
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Cool stuff</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Random feature</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Team feature</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Stuff for developers</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Another one</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md" style={{padding:'30px 30px'}}>
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Resource</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Resource name</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Another resource</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md" style={{padding:'30px 30px'}}>
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Team</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Locations</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Privacy</a></li>
              <li><a class="text-muted" style={{textDecoration:'none'}} href="#">Terms</a></li>
            </ul>
          </div>
    </div>
  )
}

export default Footer
