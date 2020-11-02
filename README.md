# NodeTSkeleton with ExpressJs <img height="50" src="https://i.ibb.co/BZkYR9H/esqueletots.png" alt="esqueletonts" border="0">

> The official documentation for this implementation with ExpressJs can be found in the base template for this project. 

<a href="https://github.com/harvic3/nodetskeleton" target="_blank" >Go to NodeTSkeleton</a>

`NodeTskeleton` is a `Clean Architecture` based `template project` for `NodeJs` using `TypeScript` to implement with any `web server framework` or even any user interface.

The main philosophy of `NodeTskeleton` is that your solution (`domain` and `application`, `“business logic”`) should be independent of the framework you use, therefore your code should NOT BE COUPLED to a specific framework or library, it should work in any framework.

The design of `NodeTskeleton` is based in `Clean Architecture`, an architecture that allows you to decouple the dependencies of your solution, even without the need to think about the type of `database`, `providers`or `services`, the `framework`, `libraries` or any other dependencies.

`NodeTskeleton` has the minimum `tools` necessary for you to develop the `domain` of your application, you can even decide not to use its included tools (you can remove them), and use the libraries or packages of your choice.

## Philosophy 🧘🏽

Applications are generally developed to be used by people, so people should be the focus of them.

For this reason `user stories` are written, stories that give us information about the type of user `(role)`, procedures that the user performs in a part of the application `(module)`, important information that serves to `structure the solution` of our application, and in practice, how is this?

The user stories must be in the `src/application` path of our solution, there we create a directory that we will call `modules` and inside this, we create a directory for the task role, for example (customer, operator, seller, admin, ...) and inside the role we create a directory of the corresponding use case module, for example (product, order, account, sales, ...), and in practice that looks more or less like this: 

<div style="text-align:center"> <img src="https://i.ibb.co/t2mHGmC/Node-Tskeleton.png" alt="Node-Tskeleton" border="10"> </div>

### Observations 👀

- If your application has no `roles`, then there's no mess, it's just `modules`. ;)

- But taking into consideration that if the roles are not yet defined in your application, `the best option` would be to follow a `dynamic role strategy` based on `permissions` and `each use case within the application (or use case group) would be a specific permission` that would feed the strategy of dynamic roles.

- Note that you can `repeat` modules between `roles`, because a `module can be used by different roles`, because if they are different roles then the use cases should also be different, otherwise those users would have the same role.

- This strategy makes the project easy to `navigate`, easy to `change`, `scale` and `maintain`, which boils down to `good mental health`, besides you will be able to integrate new developers to your projects in a faster way.

## Code of Conduct 👌

The Contributor Covenant Code of Conduct for this project is based on Covenant Contributor which you can find at the following link:

- <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md" target="_blank" >Go to Code of Conduct</a>

## Warning 💀

> Use this resource at your own risk.

-`You are welcome to contribute to this project, dare to do so.`

-`If you are interested you can contact me by this means.`

- 📫 <a href="mailto:harvic3@protonmail.com" target="_blank" >Write to him</a>
