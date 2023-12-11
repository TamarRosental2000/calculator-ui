export class ResponseCalculator{
    constructor(public count :number,
      public result:string,
      public lastOperations:LastOperations[]
      ){}
  
}
export class LastOperations{
    constructor(public fieldA :string,
      public fieldB :string,
      public operator:string,
      public lastUpdate:Date,
      public result:string
      ){}
  
}