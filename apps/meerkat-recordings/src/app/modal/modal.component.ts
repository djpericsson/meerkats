import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'meerkat-recordings-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer:DomSanitizer
  ) { }

  url: SafeResourceUrl;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if(this.data.id === '3292092130') {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://bandcamp.com/EmbeddedPlayer/track=${this.data.id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`);
    } else {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://bandcamp.com/EmbeddedPlayer/album=${this.data.id}/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/`);
    }
  }
}
