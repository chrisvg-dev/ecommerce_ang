import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce_v2';

  constructor (private toastr: ToastrService) {
    this.toastr.info('Hello', 'Hello');
  }
}