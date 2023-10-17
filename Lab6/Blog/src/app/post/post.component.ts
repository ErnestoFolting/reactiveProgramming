import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

import { Post } from '../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnDestroy {
  @Input() myPost!: Post;
  @Output() onRemove = new EventEmitter<number>();
  removePost() {
    this.onRemove.emit(this.myPost.id);
  }

  ngOnDestroy() {
    console.log('метод ngOnDestroy');
  }
}
