import { deleteRestoreTask } from "../../../../../server/controllers/taskController";
import { apiSlice } from "../apiSlice";

const TASK_URL = '/task';


export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASK_URL}/dashboard`,
                method: 'GET',
                credentials: 'include'
            })
        }),

        getAllTask: builder.query({
            query: ({ strQuery, isTrashed, search }) => ({
                url: `${TASK_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials: 'include'
            })
        }),

        createTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/create`,
                method: 'POST',
                credentials: 'include',
                body: data,
            }),
        }),

        duplicateTask: builder.mutation({
            query: (id) => ({
                url: `${TASK_URL}/duplicate/${id}`,
                method: 'POST',
                body: {},
                credentials: 'include',

            }),
        }),

        updateTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/update/${data._id}`,
                method: 'PUT',
                credentials: 'include',
                body: data,
            }),
        }),
        trashTask: builder.mutation({
            query: ({id}) => ({
                url: `${TASK_URL}/${id}`,
                method: 'PUT',
                credentials: 'include',
            }),
        }),

        createSubTask : builder.mutation({
            query: ({data,id}) => ({
                url: `${TASK_URL}/create-subtask/${id}`,
                method: 'PUT',
                credentials: 'include',
                body: data,
            }),
        }),

        getSingleTask: builder.query({
            query: (id) => ({
                url: `${TASK_URL}/${id}`,
                method: 'GET',
                credentials: 'include'
            })
        }),

        postTaskActivity : builder.mutation({
            query: ({data,id}) => ({
                url: `${TASK_URL}/activity/${id}`,
                method: 'POST',
                credentials: 'include',
                body: data,
            }),
        }),


        deleteRestoreTask: builder.mutation({
            query: ({ id, actionType }) => ({
                url: `${TASK_URL}/delete-restore/${id}?actionType=${actionType}`,
                method: 'DELETE',
                credentials: 'include',
            }), 
        }),
    })

})



export const { useGetDashboardStatsQuery, useGetAllTaskQuery,
    useCreateTaskMutation, useDuplicateTaskMutation, useUpdateTaskMutation
    ,useTrashTaskMutation,useCreateSubTaskMutation,useGetSingleTaskQuery,usePostTaskActivityMutation,
    useDeleteRestoreTaskMutation,
} = taskApiSlice;