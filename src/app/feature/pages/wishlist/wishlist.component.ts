import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Iwishlist } from '../../interfaces/iwishlist';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  wishList:Iwishlist[]=[];
  

  ngOnInit(): void {
      this.addWishList()
  }

  constructor() { }
  private readonly _wishlistService=inject(WishlistService);


  addWishList()
  {
    this._wishlistService.getWishlistItems().subscribe({
      next:(res)=>{
        this.wishList=res.recipes
        console.log(res.recipes);

      },
      error:(err)=>{
        console.log(err);
      }
    })
    
  }
  
 
}
