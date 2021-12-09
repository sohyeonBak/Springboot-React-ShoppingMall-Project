import { createReducer } from "typesafe-actions";

export const initialState = {
  mainCategory: [
    { id: 1, kind: '상의', details: [
      {id: 1, title: '아우터'},
      {id: 2, title: '티'}, 
      {id: 3, title: '니트'}, 
      {id: 4, title: '후드티'}] 
    },
    { id: 2, kind: '하의', details: [
      {id: 5, title: '스커트'}, 
      {id: 6, title: '슬랙스'}, 
      {id: 7, title: '진'}, 
      {id: 8, title: '쇼츠'}] 
    },
    { id: 3, kind: '악세사리', details: [
      {id: 9, title: '가방'}, 
      {id: 10, title: '신발'}, 
      {id: 11, title: '쥬얼리'}, 
      {id: 12, title: '기타'}] 
    }
  ],
  mainProductList: [
    { id : 1, image : 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', title : '상품명', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 2, image : 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 3, image : 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 4, image : 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 5, image : 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 6, image : 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 7, image : 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 8, image : 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 9, image : 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 10, image : 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 11, image : 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 12, image : 'https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 13, image : 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 14, image : 'https://images.unsplash.com/photo-1571513800374-df1bbe650e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'] , kind: '상의', detailed_kind: '아우터'}, 
    { id : 15, image : 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 16, image : 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 17, image : 'https://images.unsplash.com/photo-1592669241067-2f92a1048085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 18, image : 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 19, image : 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
    { id : 20, image : 'https://images.unsplash.com/photo-1547976152-ac956d37caf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', title : 'product', price : 123000, color : ['#fff', '#222222'], kind: '상의', detailed_kind: '아우터' }, 
  ],
  mainProduct: { 
    id: 1, 
    image: [
      {id: 1, src:'https://images.unsplash.com/photo-1580682312385-e94d8de1cf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80'},
      {id: 2, src:'https://images.unsplash.com/photo-1542058186993-286fdce0b580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
      {id: 3, src:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'},
      {id: 4, src:'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'},
      {id: 5, src:'https://images.unsplash.com/photo-1571273134620-1ef375de9b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    ],
    title: '상품명',
    price: 164000,
    stock: 20,
    color: [
      {id : 1, color: '#222', color_name: '블랙'},
      {id: 2, color: '#dbdbdb', color_name: '화이트'}
    ],
    size: ['S','M','L'],
    explanation : '올겨울 가장 클래식한 순간을 함께할 에센셜 아이템입니다. 나파 가죽 소재로 만들어진 셔츠 드레스입니다. 클래식한 핏과 부드러운 질감을 살린 아이템입니다. 시즌무드를 더해 줄 부츠와 주얼리를 함께 매치해 감각적인 룩을 완성해보세요. 올겨울 가장 클래식한 순간을 함께할 에센셜 아이템입니다. 나파 가죽 소재로 만들어진 셔츠 드레스입니다. 클래식한 핏과 부드러운 질감을 살린 아이템입니다. 시즌무드를 더해 줄 부츠와 주얼리를 함께 매치해 감각적인 룩을 완성해보세요.',
    review : [
      { 
        id: 1,
        image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        rate: 4,
        user: {
          id: 1,
          name: 'park12345'
        },
        comment: '가성비 좋은 제품이고 질이 무엇보다 맘에 듭니다.',
        data: ''
      },
      { 
        id: 2,
        image: '',
        rate: 5,
        user: {
          id: 1,
          name: 'anfmqekady'
        },
        comment: '좋은 제품을 잘 산 것 같아서 맘에 들고 겨울에 애용할 듯 ~',
        data: ''
      }
    ]
  },
  userCart :[
    {
      id: 1,
      title: '상품명',
      price: 164000,
      stock: 1,
      color: '블랙',
    },
    {
      id: 1,
      title: '상품명2',
      price: 86000,
      stock: 1,
      color: '베이지',
    },
  ]
}

const product = createReducer(initialState,{
  
})

export default product;