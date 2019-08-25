import { Component, OnInit, ViewChild } from "@angular/core";
import { map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
@Injectable()
export class ContactComponent implements OnInit {
  @ViewChild("pdfViewer") pdfViewer;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  private downloadFile(url: string): any {
    return this.http.get(url, { responseType: "blob" }).pipe(
      map(res => {
        return new Blob([res], { type: "application/pdf" });
      })
    );
  }

  public openPdf() {
    const url = "assets/MatthewGillilandResume.pdf";
    // url can be local url or remote http request to an api/pdf file.
    // E.g: let url = "assets/pdf-sample.pdf";
    // E.g: https://github.com/intbot/ng2-pdfjs-viewer/tree/master/sampledoc/pdf-sample.pdf
    // E.g: http://localhost:3000/api/GetMyPdf
    // Please note, for remote urls to work, CORS should be enabled at the server. Read: https://enable-cors.org/server.html

    this.downloadFile(url).subscribe(res => {
      this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
      this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
    });
  }
}
