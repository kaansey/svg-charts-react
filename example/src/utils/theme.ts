const theme = {
  plain: {
    color: '#90a4ae',
    backgroundColor: '#fafafa',
  },
  styles: [
    {
      types: ['comment', 'punctuation', 'string'],
      style: {
        color: 'rgb(144, 164, 174)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(144, 164, 174)',
      },
    },
    {
      types: ['constant', 'changed'],
      style: {
        color: 'rgb(255, 182, 44)',
      },
    },
    {
      types: ['keyword', 'number', 'char'],
      style: {
        color: 'rgb(247, 109, 71)',
      },
    },
    {
      types: ['tag', 'deleted', 'builtin'],
      style: {
        color: 'rgb(255, 83, 112)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(97, 130, 184)',
      },
    },
    {
      types: ['symbol', 'inserted'],
      style: {
        color: 'rgb(145, 184, 89)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(124, 77, 255)',
        fontStyle: 'italic',
      },
    },
  ],
};

export default theme;
