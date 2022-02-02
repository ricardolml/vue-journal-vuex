export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sint quo obcaecati deleniti provident iure, eligendi eaque aliquid vel asperiores nemo blanditiis! Inventore commodi perferendis autem ex omnis dignissimos quos?',
            picture: null

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sint quo obcaecati deleniti provident iure, eligendi eaque aliquid vel asperiores nemo blanditiis! Inventore commodi perferendis autem ex omnis dignissimos quos?',
            picture: null

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sint quo obcaecati deleniti provident iure, eligendi eaque aliquid vel asperiores nemo blanditiis! Inventore commodi perferendis autem ex omnis dignissimos quos?',
            picture: null

        },
    ]
})