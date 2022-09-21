import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DbService<T extends {id: string}> {


  private list: T[] = []

  findAll(filter?: Partial<T>):T[] {
    if ( filter ) {
      const key:string = Object.keys( filter )[0]

      return this.list.filter( (item) => {
        return item[key] === filter[key];
      })
    }

    return this.list
  }

  getByFilter ( filter ) {
    const key:string = Object.keys( filter )[0]

    return this.list.filter( (item) => {
      return item[key] === filter[key];
    })
  }

  findSome( ids:string[] ):T[] {

    const items: T[] = []
    ids.forEach( (id: string) => {
      const item:T = this.findOne( id )
      if ( item ) {
        items.push( item )
      }
    })
    return items
  }

  findOne( id:string ):T {
    // 404 and corresponding message if record with id === userId doesn't exist
    const item: T = this.list.find( i => i.id === id )
    if (!item) {
      throw new NotFoundException(HttpStatus.NOT_FOUND)
    }
    return item
  }

  create(item: T) {

      this.list.push( item )
      return item

  }

  update ( id: string, updateItem: T) {

    const item = this.findOne( id )
    if ( !item ) return null;
    Object.assign( item, updateItem )
    return item
  }

  remove( id ):T {

      const item = this.findOne( id )

      if ( !item ) {
        return null
      }

      this.list = this.list.filter( (u: T) => {
        return u.id !== id
      })

      return item
  }



}