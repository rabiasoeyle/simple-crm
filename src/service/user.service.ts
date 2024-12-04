import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, Timestamp, updateDoc } from '@angular/fire/firestore';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionName = "users";
  constructor(private firestore: Firestore) { }
  // create new user
  async createItem(data: User): Promise<void> {
    const itemsCollection = collection(this.firestore, this.collectionName);
    await addDoc(itemsCollection, data.toJSON());
  }
}
