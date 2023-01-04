import { StoreOptions, Module } from 'vuex';
// export as namespace MailState1;

declare global {
    namespace example.state {
        export interface ExampleState {}
        export interface ExampleStoreOptions
            extends StoreOptions<ExampleState> {}
        export interface ExampleStateStore
            extends Module<ExampleState, ExampleStoreOptions> {}
    }
}
